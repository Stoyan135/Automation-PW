import { test, expect, Page } from "@playwright/test";
import path from "path";

interface Results {
  username: string;
  password: string;
  dropdownValue: string;
}

const results: Results = {
  username: "testuser",
  password: "password",
  dropdownValue: "dd3",
};

const fillFormFields = async (page: Page, data: Results) => {
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill(data.username);
  await expect(usernameInput).toHaveValue(data.username);

  const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();

  const dropdown = page.locator('xpath=//select[@name="dropdown"]');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption(data.dropdownValue);
  await expect(dropdown).toHaveValue(data.dropdownValue);

  const fileInput = page.locator('xpath=//input[@type="file"]');
  const filePath = path.resolve(__dirname, "./test.txt"); // Corrected file name
  await fileInput.setInputFiles(filePath); // <- This line was missing
};

test.describe("Testing Web Form", () => {
  test.beforeEach("Open Form Web Page", async ({ page }) => {
    await page.goto(
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
    );
  });

  test("Cancel (Reset) the Form", async ({ page }) => {
    await fillFormFields(page, results);

    const resetBtn = page.locator('xpath=//input[@type="reset"]');
    await resetBtn.click();

    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toHaveValue("");
  });

  test("Submit the Form and Verify Details", async ({ page }) => {
    await fillFormFields(page, results);

    const submitBtn = page.locator('xpath=//input[@type="submit"]');
    await submitBtn.click();

    await expect(page).toHaveURL(/.*the_form_processor\.php/);

    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Processed Form Details");

    const usernameVal = page.locator('xpath=//li[@id="_valueusername"]');
    await expect(usernameVal).toHaveText(results.username);

    const dropdownVal = page.locator('xpath=//li[@id="_valuedropdown"]');
    await expect(dropdownVal).toHaveText(results.dropdownValue);
  });
});
