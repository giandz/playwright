import { test, expect } from '@playwright/test';

test('Moshi thing', async ({ page }) => {
	
	await page.goto('https://www.airalo.com');
	
	const box = page.getByTestId('search-input');
	await box.click();
	await box.pressSequentially("Japan");
	
	const japan = page.getByTestId('Japan-name');
	await japan.click();
	
	const buybutton = page.getByRole('link', { name: 'Moshi Moshi Moshi Moshi  COVERAGE Japan  DATA 1 GB  VALIDITY 7 Days PRICE $4' }).getByRole('button');
	await buybutton.click();
	
	const operator = page.getByTestId('sim-detail-operator-title');
	await expect(operator).toContainText('Moshi Moshi');
		
	const cardData = page.getByTestId('sim-detail-info-list');
	
	const coverage = cardData.getByTestId('COVERAGE-value');
	await expect(coverage).toContainText('Japan');
	
	const data = cardData.getByTestId('DATA-value');
	await expect(data).toContainText('1 GB');
	
	const validity = cardData.getByTestId('VALIDITY-value');
	await expect(validity).toContainText('7 Days');
	
	const price = cardData.getByTestId('PRICE-value');
	await expect(price).toContainText('$4.50');

});
