import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.formData();

    // Common fields
    const name = body.get("name") || `${body.get("first-name") || ""} ${body.get("last-name") || ""}`.trim();
    const email = body.get("email");
    const phone = body.get("Phone") || body.get("phone") || "Not Provided";
    const message = body.get("user_message") || body.get("message") || "No message provided.";
    const resume = body.get("resume");
    const service = body.get("service") || "N/A";
    const country = body.get("country") || "N/A";

    // Detect source (Career / Internship / Contact)
    let source = "General Inquiry";
    if (req.url.includes("/career")) source = "Career Form";
    else if (req.url.includes("/internship")) source = "Internship Form";
    else if (req.url.includes("/contact")) source = "Contact Form";

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_USER,
        pass: process.env.NODE_PASS,
      },
    });

    // Handle file attachment (if any)
    const attachments = [];
    if (resume && resume.name) {
      const arrayBuffer = await resume.arrayBuffer();
      attachments.push({
        filename: resume.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    // ✅ Common subject & email heading
    const subject = `📬 ${source} Submission from ${name || "Anonymous"}`;

    const htmlMessage = `
      <h2 style="color:#2d89ef;">📩 ${source} Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      ${service !== "N/A" ? `<p><b>Service:</b> ${service}</p>` : ""}
      ${country !== "N/A" ? `<p><b>Country:</b> ${country}</p>` : ""}
      <p><b>Message:</b><br/>${message}</p>
      <hr/>
      <p style="font-size:13px;color:#666;">This message was automatically generated from the ${source} of your website.</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `"AP&A SYSTEM Website" <${process.env.NODE_USER}>`,
      to: "parassaxenaofficial@gmail.com", // change to your main inbox if needed
      subject,
      html: htmlMessage,
      attachments,
    });

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
