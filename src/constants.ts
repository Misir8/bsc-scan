export const CONTRACT_ADDRESS = '0xe92c2c9ca4782ee5bfd3ca3848249c1c4cba5cf8';
export const BATCH_SIZE = 1000;

/**
 * tokenBalances(address[],address)
 */
export const TOKEN_BALANCES_ID = 'aad33091';
export const TOKEN_BALANCES_TYPE: ['address[]', 'address'] = ['address[]', 'address'];

/**
 * etherBalances(address[])
 */
export const ETHER_BALANCES_ID = 'dbdbb51b';
export const ETHER_BALANCES_TYPE: ['address[]'] = ['address[]'];

/**
 * tokensBalance(address,address[])
 */
export const TOKENS_BALANCE_ID = 'e5da1b68';
export const TOKENS_BALANCE_TYPE: ['address', 'address[]'] = ['address', 'address[]'];

/**
 * tokensBalances(address[],address[])
 */
export const TOKENS_BALANCES_ID = '06187b4f';
export const TOKENS_BALANCES_TYPE: ['address[]', 'address[]'] = ['address[]', 'address[]'];

/**
 * pendingPoolsAUTOBalance(address[],address[])
 */
export const PENDING_POOLS_AUTO_BALANCES_ID = 'b8e42955';
export const PENDING_POOLS_AUTO_BALANCES_TYPE: ['address', 'uint256[]'] = ['address', 'uint256[]'];

/**
 * stakedPoolsWantTokens(address[],address[])
 */
export const STAKED_POOLS_WANT_TOKENS_ID = 'a03763a0';
export const STAKED_POOLS_WANT_TOKENS_TYPE: ['address', 'uint256[]'] = ['address', 'uint256[]'];
