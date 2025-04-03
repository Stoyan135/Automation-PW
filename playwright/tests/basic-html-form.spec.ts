import { test, expect, Page } from "@playwright/test";
import path from "path";

const fillFields = async (page: Page) => {
  // Locate and fill username input
  const usernameInput = page.locator("//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("testUser");
  await expect(usernameInput).toHaveValue("testUser");

  // Locate and fill comments field
  const commentsField = page.locator('//textarea[@name="comments"]');
  await expect(commentsField).toBeVisible();
  await commentsField.fill("Test Comment");
  await expect(commentsField).toHaveValue("Test Comment");

  // Locate and check the checkbox
  const checkboxEl = page.locator('//input[@value="cb2"]');
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();

  // Locate and select an option from the dropdown
  const dropdown = page.locator('//select[@name="dropdown"]');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("dd2");
  await expect(dropdown).toHaveValue("dd2");
};

test.describe("Test Basic HTML form", () => {
  test.beforeEach(async ({ page }) => {
    const htmlFormUrl =
      process.env.BASE_HTML_FORM_URL ||
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html";
    await page.goto(htmlFormUrl);
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Rest form", async ({ page }) => {
    const cancelBtn = page.locator('xpath=//input[@type="reset"]');
    await expect(cancelBtn).toBeVisible();
    await fillFields(page);
    await cancelBtn.click();

    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator('xpath=//input[@value="cb3"]')).toBeChecked();
  });

  test("Submit form", async ({ page }) => {
    await fillFields(page);

    const submitBtn = page.locator('//input[@type="submit"]');
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    // Wait for navigation and verify submitted data is shown
    await page.waitForURL("**/styled/the_form_processor.php");
    const body = await page.textContent("body");
    expect(body).toContain("testUser");
    expect(body).toContain("Test Comment");
  });

  //test("Comments field", async ({ page }) => {
  // const commentsField = page.locator('//textarea[@name="comments"]');
  //await expect(commentsField).toBeVisible();
  // await commentsField.fill("Test Comment");
  // await expect(commentsField).toHaveValue("Test Comment");
  //});

  // test("Test username field", async ({ page }) => {
  // const usernameInput = page.locator("//input[@name='username']");
  // await expect(usernameInput).toBeVisible();
  // await usernameInput.fill("testUser");
  //  await expect(usernameInput).toHaveValue("testUser");
  //});

  //test("Test Checkbox selection", async ({ page }) => {
  //const checkboxEl = page.locator('//input[@value="cb2"]');
  // await expect(checkboxEl).toBeVisible();
  // await checkboxEl.check();
  // await expect(checkboxEl).toBeChecked();
  // });

  //("Select from the dropdown options", async ({ page }) => {
  // const dropdown = page.locator('//select[@name="dropdown"]');
  // await expect(dropdown).toBeVisible();
  // await dropdown.selectOption("dd2");
  //await expect(dropdown).toHaveValue("dd2");
  //});

  // test("Upload file input", async ({ page }) => {
  // const uploadBtn = page.locator('//input[@type="file"]');
  //  const filePath = path.resolve("tests/test.txt");
  //  await expect(uploadBtn).toBeVisible();
  //  await uploadBtn.setInputFiles(filePath);
  //  });
});
