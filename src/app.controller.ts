import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('birthday')
  birthday() {
    return {
      name: '',
      message: [
        'Today is a special day',
        'because someone amazing was born.',
        'May your dreams become reality.',
        'Keep smiling and shining ✨',
        'Happy Birthday oyin',
      ],
    };
  }
}
