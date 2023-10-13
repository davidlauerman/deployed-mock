import { test, expect } from '@playwright/test';


/**
  The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
    2. Interact with the page
    3. Assert something about the page against your expectations
  Look for this pattern in the tests below!
 */

// If you needed to do something before every test case...
test.beforeEach(() => {
    // ... you'd put it here.
    // TODO: Is there something we need to do before every test case to avoid repeating code?
  })

/**
 * Don't worry about the "async" yet. We'll cover it in more detail
 * for the next sprint. For now, just think about "await" as something 
 * you put before parts of your test that might take time to run, 
 * like any interaction with the page.
 */
test('on page load, i see an input bar', async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  await page.goto('http://localhost:8000/');
  await expect(page.getByLabel('Command input')).toBeVisible()
})

test('after I type into the input box, its text changes', async ({ page }) => {
  // Step 1: Navigate to a URL
  await page.goto('http://localhost:8000/');

  // Step 2: Interact with the page
  // Locate the element you are looking for
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('Awesome command');

  // Step 3: Assert something about the page
  // Assertions are done by using the expect() function
  const mock_input = `Awesome command`
  await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
});

test('on page load, i see a button', async ({ page }) => {
  // TODO WITH TA: Fill this in!
  await page.goto('http://localhost:8000/');
  await expect(page.getByRole('button')).toBeVisible();
});

test('after I click the button, my command gets pushed', async ({ page }) => {
  // TODO: Fill this in to test your button push functionality!
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('test');
  await page.getByRole('button').click();
  await expect(page.getByText('Not a recognized function. Try again!')).toBeVisible()
});

test('after i push mode command, the mode changes', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button').click();
  await expect(page.getByText('Changed mode!')).toBeVisible()
  //
});

test('after i push load command, i get bad response', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file');
  await page.getByRole('button').click();
  await expect(page.getByText("Filepath could not be found!")).toBeVisible()
  // 
});

test('after i push load command with good filepath, i get good response', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await expect(page.getByText("File fileInt loaded!")).toBeVisible()
});

test('after i push load command with good filepath(Verbose), i get good response', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await expect(page.getByText("File fileInt loaded!")).toBeVisible()
  await expect(page.getByText("Output: ")).toBeVisible()
});

test('after i push load command with bad filepath(Verbose), i get bad response', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file');
  await page.getByRole('button').click();
  await expect(page.getByText("Filepath could not be found!")).toBeVisible()
  await expect(page.getByText("Output: ")).toBeVisible()
});

test('when i view before i load, i dont see anything', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("Wrong")).toBeVisible()
});

test('view works correctly after loading', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("1")).toBeVisible()
});

test('when i load twice, i see the most recent in view', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileTxt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("Apple")).toBeVisible()
});
