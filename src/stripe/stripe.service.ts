import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(
    @Inject(process.env.STRIPE_API_KEY) private readonly apiKey: string,
  ) {
    this.stripe = new Stripe(this.apiKey, {
      apiVersion: '2024-04-10',
    });
  }

  async getProducts(): Promise<Stripe.Product[]> {
    const product = await this.stripe.products.list();
    return product.data;
  }

  async getCustomers() {
    const customers = await this.stripe.customers.list();
    return customers;
  }
}
