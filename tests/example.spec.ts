import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-a-spec.lixil.com/');
  await page.waitForURL('https://dev-a-spec.lixil.com/dev_authenticate/');
  await page.getByLabel('認証').click();
  await page.getByLabel('認証').fill('c9w$pDMciZT%');
  await page.getByLabel('認証').press('Enter');
  await page.locator('button').filter({ hasText: /^JP$/ }).click();
  await page.getByRole('button', { name: '設計を始める →' }).first().click();
  await page.getByRole('link', { name: '同意して始める' }).click();
  await page.getByPlaceholder('メールアドレス').click();
  await page.getByPlaceholder('メールアドレス').fill('k36795284@gmail.com');
  await page.getByPlaceholder('メールアドレス').click();
  await page.getByRole('button', { name: '次へ' }).click();
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('1111_tkhr_1010');
  await page.getByRole('button', { name: '次へ' }).click();
  await page.waitForURL('https://dev-a-spec.lixil.com/projects/');
  await page.getByRole('button', { name: '設計する' }).click();
  await page.locator('.v-input--selection-controls__ripple').first().click();
  await page.getByRole('button', { name: '次へ' }).click();
  await page.getByPlaceholder('プロジェクト名').click();
  await page.getByPlaceholder('プロジェクト名').fill('playwright_test');
  await page.getByPlaceholder('メモ欄').click();
  await page.getByPlaceholder('メモ欄').fill('test');
  await page.getByRole('button', { name: '作成', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "./プロジェクト作成.png" });
  await page.getByRole('button', { name: '新規設計' }).nth(1).click();
  await page.locator('.py-0 > .v-input > .v-input__control > .v-input__slot').click();
  await page.locator('.py-0 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').fill('case1');
  await page.getByRole('button', { name: '作成', exact: true }).click();
  // await page.locator('.v-input--selection-controls__ripple').first().click();
  await page.getByRole('button', { name: '次へ' }).click();
  await page.getByRole('button', { name: '閉じる' }).click();
  await page.getByRole('button', { name: '器具選択' }).click();
  await page.getByRole('button', { name: '計算開始' }).click();
  test.setTimeout(120000);
  await page.waitForSelector('span.project-name');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "./計算結果.png" });
  await page.locator('.btn-show-detail').first().click();
  await page.waitForSelector('span.project-name');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "./詳細表示.png" });
});