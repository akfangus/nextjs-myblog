import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  // API 라우트에 전송 요청 보냄 (fetch)
  const response = await fetch("api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something Server went wrong!");
  }
  console.log(";d");
  return data;
}
