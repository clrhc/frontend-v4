import Image from 'next/image'
import { HelpIcon } from '@pancakeswap/uikit'
import { isChainSupported } from 'utils/wagmi'
import { memo } from 'react'
import { ASSET_CDN } from 'config/constants/endpoints'

export const ChainLogo = memo(
  ({ chainId, width = 24, height = 24 }: { chainId: number; width?: number; height?: number }) => {
    if (chainId === 128123) {
      return (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src="https://raw.githubusercontent.com/Iguana-DEX/assets/main/chains/etherlink.svg"
          width={width}
          height={height}
          unoptimized
        />
      )
    }

    if (isChainSupported(chainId)) {
      return (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src={`${ASSET_CDN}/web/chains/${chainId}.png`}
          width={width}
          height={height}
          unoptimized
        />
      )
    }

    return <HelpIcon width={width} height={height} />
  },
)
