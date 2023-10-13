import { test, expect } from '@playwright/test';


test('on page load, i see an input bar', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await expect(page.getByLabel('Command input')).toBeVisible()
})

test('after I type into the input box, its text changes', async ({ page }) => {
  await page.goto('http://localhost:8000/');

  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('Awesome command');

  const mock_input = `Awesome command`
  await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
});

test('on page load, i see a button', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await expect(page.getByRole('button')).toBeVisible();
});

test('after I click the button, my command gets pushed', async ({ page }) => {
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

test('when i search before i load, i dont see anything', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('search');
  await page.getByRole('button').click();
  await expect(page.getByText("Wrong")).toBeVisible()
});

test('search works correctly after loading', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("1")).toBeVisible()
});

test('when i load twice, i can still search', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileTxt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('search');
  await page.getByRole('button').click();
  await expect(page.getByText("Apple")).toBeVisible()
});

test('when i load twice but one is wrong, i see the first one', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file ppppp');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("1")).toBeVisible()
});

test('after i view without loading(Verbose), i get bad response', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("Wrong")).toBeVisible()
  await expect(page.getByText("Output: ")).toBeVisible()
});

test('I can switch between modes multiple times', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button').click();
  await expect(page.getByText("Output: ")).toBeVisible()
});

test('when i reload i get the new search results', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('search');
  await page.getByRole('button').click();
  await expect(page.getByText("1")).toBeVisible()
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileTxt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('search');
  await page.getByRole('button').click();
  await expect(page.getByText("Apple")).toBeVisible()
});

test('when i reload i get the new view results', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileInt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("7")).toBeVisible()
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('load_file fileTxt');
  await page.getByRole('button').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('view');
  await page.getByRole('button').click();
  await expect(page.getByText("Elephant")).toBeVisible()
});
