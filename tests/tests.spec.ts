const { test, expect } = require('@playwright/test');

test('Fishing App Loads Correctly', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const title = await page.title();
  expect(title).toBe('Fishing Spots');
});

test('Adding a New Spot', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.fill('input[placeholder="New spot name"]', 'New Spot');
  await page.fill('input[placeholder="Location"]', 'Test Location');
  await page.fill('input[placeholder="Description"]', 'Test Description');
  await page.click('button');
  await page.waitForSelector('li:has-text("New Spot")');
});

test('Clicking on a fishing spot displays its details correctly', async ({ page }) => {
  await page.goto('http://localhost:8080');
  
  // click a fishing spot
  await page.getByText('Lakeview').click();

  // assert that location is populated
  await expect(page.locator("text='Location: Lake Tahoe'")).toHaveCount(1);

  // assert that description is populated
  await expect(page.locator("text='Description: Great for trout fishing'")).toHaveCount(1);
});

test('Clicking a different fishing spot changes the displayed details correctly', async ({ page }) => {
  await page.goto('http://localhost:8080');
  
  // click a fishing spot
  await page.getByText('Lakeview').click();
  // then click a different spot
  await page.getByText('Sunset Bay').click();

  // assert that location is populated
  await expect(page.locator("text='Location: Pacific Coast'")).toHaveCount(1);

  // assert that description is populated
  await expect(page.locator("text='Description: Ideal for deep sea fishing'")).toHaveCount(1);
});

test('Clicking the Add Spot button adds a new fishing spot', async ({ page }) => {
  await page.goto('http://localhost:8080');
  
  // add a new fishing spot
  await page.getByPlaceholder('New spot name').fill('Test spot');
  await page.getByPlaceholder('Location').fill('Test location');
  await page.getByPlaceholder('Description').fill('Test description');
  await page.getByRole('button', { name: 'Add Spot' }).click();

  // click the spot and veriy details are populated
  await page.getByText('Test spot').click();
  await page.getByRole('heading', { name: 'Test spot' }).click();
  await page.getByText('Location: Test location').click();
  await page.getByText('Description: Test description').click();
});

test('Cannot submit new spot with empty name', async ({ page }) => {
  await page.goto('http://localhost:8080');
  
  // populate location and description
  await page.getByPlaceholder('Location').fill('Test location');
  await page.getByPlaceholder('Description').fill('Test description');

  // click add
  await page.getByRole('button', { name: 'Add Spot' }).click();

  // ensure new spot was not added
  // how?
});

test('Cannot submit new spot with empty location', async ({ page }) => {
  await page.goto('http://localhost:8080');
  

});

test('Cannot submit new spot with empty description', async ({ page }) => {
  await page.goto('http://localhost:8080');
  

});