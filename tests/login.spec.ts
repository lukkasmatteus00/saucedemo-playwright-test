import { test, expect } from "@playwright/test";
import { enterCredentials } from "../utils/login";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".login_logo")).toHaveText("Swag Labs");
});

test("Successful login with standard user", async ({ page }) => {
  await enterCredentials(page, "standard_user", "secret_sauce");

  // Wait for navigation to inventory page
  await expect(page).toHaveURL(/.*inventory.html/);

  // Verify main elements on the homepage after login
  await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible(); // Shopping cart icon
  await expect(page.locator('[data-test="open-menu"]')).toBeVisible(); // Hamburger menu button
  await expect(page.locator('[data-test="title"]')).toContainText("Products"); // Page title

  // Verify that product items are listed
  const itemsCount = await page.locator(".inventory_item").count();
  expect(itemsCount).toBeGreaterThan(0);

  await expect(
    page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
  ).toBeVisible(); // Add to cart button
  
  // Verify elements of the first product card
  await expect(page.locator('[data-test="inventory-item-price"]').first()).toBeVisible(); // Product price
  await expect(page.locator('[data-test="inventory-item-name"]').first()).toBeVisible(); // Product name
  await expect(page.locator('[data-test="inventory-item-desc"]').first()).toBeVisible(); // Product description
});

test("Failed login with wrong password", async ({ page }) => {
  await enterCredentials(page, "standard_user", "wrong_password");

  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText(
    "Username and password do not match any user in this service"
  );
});
