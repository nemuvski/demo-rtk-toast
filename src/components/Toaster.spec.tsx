import React from 'react'
import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { store } from '~/stores/store'
import { buildToastContent } from '~/models/Toast'
import { addToast } from '~/stores/toast/slice'
import Toaster from '~/components/Toaster'

describe('<Toaster />', function () {
  it('ストアされているToastContentの日付について降順で出力される', async function () {
    const toastContentList = [
      buildToastContent('success', '1'),
      buildToastContent('info', '2'),
      buildToastContent('warning', '3'),
      buildToastContent('error', '4'),
    ]
    toastContentList.forEach((toastContent, index) => {
      store.dispatch(
        addToast({
          ...toastContent,
          // 時間をずらすために、意図的にcreatedAtTimestampフィールドに加算したものを設定
          createdAtTimestamp: toastContent.createdAtTimestamp + 100 * index,
        })
      )
    })

    const { container } = render(
      <Provider store={store}>
        <Toaster />
      </Provider>
    )

    const toasterElement = container.querySelector('.toaster')

    // 要素数が登録した数に等しい
    expect(toasterElement?.childElementCount).toBe(toastContentList.length)

    // 要素のコンテンツの内容から期待する表示順で出力されているかを評価
    const elementContentList: Array<string | null> = []
    toasterElement?.childNodes.forEach((node) => {
      elementContentList.push(node.textContent)
    })
    expect(elementContentList).to.eql(['4', '3', '2', '1'])
  })
})
