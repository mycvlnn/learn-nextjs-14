'use client'

import classNames from 'classnames/bind'
import styles from './image-picker.module.scss'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

const cx = classNames.bind(styles)

interface IProps {
  label: string
  name: string
}

const ImagePicker: React.FC<IProps> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null)
  const refInputPicker = useRef<HTMLInputElement | null>(null)

  const handlePickClick = () => {
    refInputPicker.current?.click()
  }

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const file = event.target.files?.[0]

    // Xử lý trong trường hợp không chọn file
    if (!file) {
      return
      setPickedImage(null)
    }

    const fileReader = new FileReader()
    // Xử lý khi đọc xong
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={cx('picker')}>
      <label htmlFor={name}>{label}</label>
      <div className={cx('controls')}>
        <div className={cx('preview')}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>

        <input
          className={cx('input')}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          id={name}
          ref={refInputPicker}
          onChange={handleImageChange}
          required
        />
        <button
          className={cx('button')}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}

export default ImagePicker
