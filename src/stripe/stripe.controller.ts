import { Controller, Get } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private stripService: StripeService) {}

  @Get('products')
  async getProducts() {
    return await this.stripService.getProducts();
  }

  @Get('customers')
  async getCustomers() {
    return await this.stripService.getCustomers();
  }
}
