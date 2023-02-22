import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

/*
const rootElement = document.getElementById('contract-list');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/

const contracts = [
  {
    id: 1,
    name: 'Kiet',
    phoneNumber: '09000000001',
  },
  {
    id: 2,
    name: 'Chau',
    phoneNumber: '09000000002',
  },
  {
    id: 3,
    name: 'Yêu',
    phoneNumber: '09000000002',
  },
];

function sortContractName(contractA, contractB) {
  return contractA.name.localeCompare(contractB.name);
}

const contractListElement = document.getElementById('contract-list');
const inputName = document.getElementById('input-name');
const inputPhone = document.getElementById('input-phone');
const inputSearch = document.getElementById('input-search');
const btnAdd = document.getElementById('btn-add');
const btnSearch = document.getElementById('btn-search');
const btnDelete = document.getElementById('btn-delete');

function renderContractHtml(data) {
  const contractsHTML = data.sort(sortContractName).map((contract) => {
    return `
      <div class="card">
          <div class="card-body d-flex justify-content-between" >
              <div>${contract.name}</div>
              <div>${contract.phoneNumber}</div>
          </div>
      </div>
    `;
  });

  contractListElement.innerHTML = contractsHTML;
}

btnAdd.addEventListener('click', () => {
  const name = inputName.value;
  const phoneNumber = inputPhone.value;

  contracts.push({ id: contracts.length + 1, name, phoneNumber });

  renderContractHtml(contracts);
});

renderContractHtml(contracts);
