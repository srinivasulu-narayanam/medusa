import { AbstractPaymentProvider } from "@medusajs/framework/utils";
import { Logger } from "@medusajs/framework/types";
import {
  PaymentProviderError,
  PaymentProviderSessionResponse,
  PaymentSessionStatus,
  CreatePaymentProviderSession,
  UpdatePaymentProviderSession,
  ProviderWebhookPayload,
  WebhookActionResult,
} from "@medusajs/types";

type InjectedDependencies = {
  logger: Logger;
};

type Options = {
  apiKey: string;
};

class RazorpayProviderService extends AbstractPaymentProvider<Options> {
  static identifier = "my-payment";
  protected logger_: Logger;
  protected options_: Options;
  // Assuming you're using a client to integrate
  // with a third-party service
  protected client;

  constructor({ logger }: InjectedDependencies, options: Options) {
    // @ts-ignore
    super(...arguments);

    this.logger_ = logger;
    this.options_ = options;

    // Assuming you're initializing a client
    // this.client = new Client(options)
  }

  capturePayment(
    paymentData: Record<string, unknown>
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    // const order_id = (paymentSessionData as unknown as Orders.RazorpayOrder).id;
    // const paymentsResponse = await this.razorpay_.orders.fetchPayments(
    //   order_id
    // );
    // const possibleCatpures = paymentsResponse.items?.filter(
    //   (item) => item.status == "authorized"
    // );
    // const result = possibleCatpures?.map(async (payment) => {
    //   const { id, amount, currency } = payment;

    //   const paymentIntent = await this.razorpay_.payments.capture(
    //     id,
    //     amount as string,
    //     currency as string
    //   );
    //   return paymentIntent;
    // });
    // if (result) {
    //   const payments = await Promise.all(result);
    //   const res = payments.reduce(
    //     (acc, curr) => ((acc[curr.id] = curr), acc),
    //     {}
    //   );
    //   (paymentSessionData as unknown as Orders.RazorpayOrder).payments = res;
    // }
    // return paymentSessionData;
    throw new Error("Method not implemented.");
  }

  authorizePayment(
    paymentSessionData: Record<string, unknown>,
    context: Record<string, unknown>
  ): Promise<
    | PaymentProviderError
    | {
        status: PaymentSessionStatus;
        data: PaymentProviderSessionResponse["data"];
      }
  > {
    throw new Error("Method not implemented.");
  }
  cancelPayment(
    paymentData: Record<string, unknown>
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    throw new Error("Method not implemented.");
  }
  initiatePayment(
    context: CreatePaymentProviderSession
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse> {
    throw new Error("Method not implemented.");
  }
  deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    throw new Error("Method not implemented.");
  }
  getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    throw new Error("Method not implemented.");
  }
  refundPayment(
    paymentData: Record<string, unknown>,
    refundAmount: number
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    throw new Error("Method not implemented.");
  }
  retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    throw new Error("Method not implemented.");
  }
  updatePayment(
    context: UpdatePaymentProviderSession
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse> {
    throw new Error("Method not implemented.");
  }
  getWebhookActionAndData(
    data: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    throw new Error("Method not implemented.");
  }
  // TODO implement methods
}

export default RazorpayProviderService;
