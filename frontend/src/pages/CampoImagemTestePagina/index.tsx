import { ChangeEvent, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FiPlus } from "react-icons/fi";
import "./style.css";

export default function CampoImagem() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  
  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Campo Imagem</h1>
        </Col>
        <div className="input-block">
          <label htmlFor="images">Fotos</label>
          <div className="images-container">
            { previewImages.map(image => {
              return (
                <img
                  key={image}
                  src={image}
                  alt="imagem-produto"
                />
              );
            }) }
            <label
              htmlFor="image[]"
              className="new-image"
            >
              <FiPlus size={24} color="#15b6d6" />
            </label>
          </div>
          <input
            multiple
            onChange={handleSelectImages}
            type="file"
            id="image[]"
          />
        </div>
      </Row>
    </Container>
  );
}