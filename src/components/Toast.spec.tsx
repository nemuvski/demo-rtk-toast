import React from 'react'
import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { wait } from '@testing-library/user-event/dist/utils'
import { store } from '~/stores/store'
import Toast from '~/components/Toast'
import { addToast } from '~/stores/toast/slice'
import { buildToastContent } from '~/models/Toast'
import { TOAST_ANIMATION_DURATION, TOAST_DISPLAY_DURATION } from '~/constants'

describe('<Toast />', function () {
  it('コンテンツ（文字列）が出力され、一定時間経過後に要素が消える', async function () {
    const toastContent = buildToastContent('info', 'SAMPLE!!!')
    store.dispatch(addToast(toastContent))
    const { container } = render(
      <Provider store={store}>
        <Toast toastId={toastContent.id} />
      </Provider>
    )

    // チェック: 指定した文字列を含む要素がある
    expect(screen.getByText('SAMPLE!!!')).not.toBeNull()

    // チェック: フェードアウトするためのクラスが付与される
    await wait(TOAST_DISPLAY_DURATION - TOAST_ANIMATION_DURATION)
    expect(container.querySelector('div.toast')?.classList.contains('is-hidden')).toBeTruthy()

    // チェック: 要素が無くなる
    await wait(TOAST_ANIMATION_DURATION)
    expect(container.querySelector('div.toast')).toBeNull()
  })

  describe('コンテンツのレベルを表すクラスが付与されている', function () {
    it('success', function () {
      const toastContent = buildToastContent('success', 'SAMPLE!!!')
      store.dispatch(addToast(toastContent))
      const { container } = render(
        <Provider store={store}>
          <Toast toastId={toastContent.id} />
        </Provider>
      )
      expect(container.querySelector('div.toast')?.classList.contains('success')).toBeTruthy()
    })

    it('info', function () {
      const toastContent = buildToastContent('info', 'SAMPLE!!!')
      store.dispatch(addToast(toastContent))
      const { container } = render(
        <Provider store={store}>
          <Toast toastId={toastContent.id} />
        </Provider>
      )
      expect(container.querySelector('div.toast')?.classList.contains('info')).toBeTruthy()
    })

    it('warning', function () {
      const toastContent = buildToastContent('warning', 'SAMPLE!!!')
      store.dispatch(addToast(toastContent))
      const { container } = render(
        <Provider store={store}>
          <Toast toastId={toastContent.id} />
        </Provider>
      )
      expect(container.querySelector('div.toast')?.classList.contains('warning')).toBeTruthy()
    })

    it('error', function () {
      const toastContent = buildToastContent('error', 'SAMPLE!!!')
      store.dispatch(addToast(toastContent))
      const { container } = render(
        <Provider store={store}>
          <Toast toastId={toastContent.id} />
        </Provider>
      )
      expect(container.querySelector('div.toast')?.classList.contains('error')).toBeTruthy()
    })
  })
})
