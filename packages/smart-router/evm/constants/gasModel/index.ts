import { ChainId, Token } from '@pancakeswap/sdk'
import {
  ethereumTokens,
  bscTokens,
  bscTestnetTokens,
  goerliTestnetTokens,
  polygonZkEvmTokens,
  polygonZkEvmTestnetTokens,
  zkSyncTestnetTokens,
  zksyncTokens,
  lineaTestnetTokens,
  arbitrumGoerliTokens,
  arbitrumTokens,
  etherlinkTestnetTokens,
} from '@pancakeswap/tokens'

export const usdGasTokensByChain = {
  [ChainId.ETHEREUM]: [ethereumTokens.usdt],
  [ChainId.GOERLI]: [goerliTestnetTokens.usdc],
  [ChainId.BSC]: [bscTokens.busd],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.busd],
  // TODO: new chains
  [ChainId.ARBITRUM_ONE]: [arbitrumTokens.usdc],
  [ChainId.ARBITRUM_GOERLI]: [arbitrumGoerliTokens.usdc],
  [ChainId.POLYGON_ZKEVM]: [polygonZkEvmTokens.usdt],
  [ChainId.POLYGON_ZKEVM_TESTNET]: [polygonZkEvmTestnetTokens.usdt],
  [ChainId.ZKSYNC]: [zksyncTokens.usdc],
  [ChainId.ZKSYNC_TESTNET]: [zkSyncTestnetTokens.usdc],
  [ChainId.LINEA_TESTNET]: [lineaTestnetTokens.usdc],
  [ChainId.ETHERLINK_TESTNET]: [etherlinkTestnetTokens.usdc],
} satisfies Record<ChainId, Token[]>

export * from './v2'
export * from './v3'
export * from './stableSwap'
