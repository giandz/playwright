import { test, expect } from '@playwright/test';

test('Moshi thing', async ({ page }) => {
	//expected card data
	const card = {country: 'Japan',	operator: 'Moshi Moshi', dataAllowance: '1 GB', validity: '7 Days',	price: '$4.50'};
	
	//go to website
	await page.goto('https://www.airalo.com');
	
	//click and input country
	const box = page.getByTestId('search-input');
	await box.click();
	await box.pressSequentially(card.country);
	
	//click country on dropdown
	await page.getByTestId(card.country + '-name').click();
	
	//click buy
	page.getByTestId('esim-button').nth(0).click();
	
	//check card operator
	await expect(page.getByTestId('sim-detail-operator-title')).toContainText(card.operator);
		
	const cardInfo = page.getByTestId('sim-detail-info-list');
	
	//check coverage
	await expect(cardInfo.getByTestId('COVERAGE-value')).toContainText(card.country);
	
	//check data allowance
	await expect(cardInfo.getByTestId('DATA-value')).toContainText(card.dataAllowance);
	
	//check validity
	await expect(cardInfo.getByTestId('VALIDITY-value')).toContainText(card.validity);
	
	//check price
	await expect(cardInfo.getByTestId('PRICE-value')).toContainText(card.price);

});
