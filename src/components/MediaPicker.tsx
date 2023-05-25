import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  const [fileType, setFileType] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const file = files[0]
    const previewURL = URL.createObjectURL(file)
    const fileType = file.type.split('/')[0]

    setPreview(previewURL)
    setFileType(fileType)
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/* video/*"
        className="invisible h-0 w-0"
      />

      {preview && fileType === 'image' && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}

      {preview && fileType === 'video' && (
        <video
          src={preview}
          controls
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
