import { expect } from 'chai';
import { callWithWeb3, Web3ProviderLike } from '../../src';
import { decode, encodeWithId, stringToBuffer } from '../../src/utils';
import {
  ETHER_BALANCES_ID,
  ETHER_BALANCES_TYPE,
  TOKEN_BALANCES_ID,
  TOKEN_BALANCES_TYPE
} from '../../src/constants';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';

const BalanceScanner = artifacts.require('BalanceScanner');
const FixedBalanceToken = artifacts.require('FixedBalanceToken');

describe('providers/web3', () => {
  describe('Web3Provider', async () => {
    it('should get Ether balances from the contract', async () => {
      const { address } = await BalanceScanner.deployed();
      const accounts = await web3.eth.getAccounts();
      accounts.shift();

      const data = encodeWithId(ETHER_BALANCES_ID, ETHER_BALANCES_TYPE, accounts);
      const response = await callWithWeb3((web3 as unknown) as Web3ProviderLike, address, data);

      const decoded = decode(response);

      for (let i = 0; i < accounts.length; i++) {
        const balance = new BigNumber(await web3.eth.getBalance(accounts[i]));
        expect(balance.isEqualTo(decoded[i])).to.equal(true);
      }
    });

    it('should get token balances from the contract', async () => {
      const { address } = await BalanceScanner.deployed();
      const token = await FixedBalanceToken.new();
      const accounts = await web3.eth.getAccounts();

      const data = encodeWithId(TOKEN_BALANCES_ID, TOKEN_BALANCES_TYPE, accounts, token.address);
      const response = await callWithWeb3((web3 as unknown) as Web3ProviderLike, address, data);

      const decoded = decode(response);

      for (let i = 0; i < accounts.length; i++) {
        expect(decoded[i].isEqualTo(new BigNumber('100000000000000000000'))).to.equal(true);
      }
    });
  });
});
