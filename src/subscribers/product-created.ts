import { type SubscriberConfig } from "@medusajs/framework";
import { EmailService } from "src/services/smtp/smtp";
import { productCreated } from "src/services/smtp/email-templates/product-created";

// subscriber function
export default async function productCreateHandler(data: any) {
//   const product = data.event.data;
//   const emailService = new EmailService();
//   const subject = productCreated.subject;
//   const htmlBody = productCreated.body.replace(
//     /{{ product\.([a-zA-Z]+) }}/g,
//     (match, prop) => product[prop]
//   );

//   await emailService.sendEmail(
//     "srinu.narayanam2023@gmail.com",
//     subject,
//     htmlBody
//   );
}

// subscriber config
export const config: SubscriberConfig = {
  event: "product.created",
};
