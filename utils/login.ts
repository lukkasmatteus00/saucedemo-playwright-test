import { Page } from "@playwright/test";

export async function enterCredentials(
  page: Page,
  username: string,
  password: string
) {
  await page.fill('[data-test="username"]', username);
  await page.fill('[data-test="password"]', password);
  await page.click('[data-test="login-button"]');
}
