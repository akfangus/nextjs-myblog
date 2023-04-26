import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "유효하지 않은 포맷." }), {
      status: 400,
    });
  }
  const { from, subject, message } = body;
  //노드메일러를 이용해서 받아온 데이터를 전송!

  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일이 전송되었습니다." }), {
          status: 200,
        })
    )
    .catch((e) => {
      console.log(e);
      return new Response(
        JSON.stringify({ message: "메일 전송에 실패했습니다." }),
        {
          status: 500,
        }
      );
    });
}
