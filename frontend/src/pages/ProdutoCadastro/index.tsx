import { Row, Col, Button, Alert, ButtonGroup } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./style.css"
import Campo from "../../components/Campo";
import { useHistory } from "react-router-dom";
import { FiPlus, FiDelete, FiTrash } from "react-icons/fi";
import { ChangeEvent, useState } from "react";
// import api from "../../services/api";

interface FormTypes {
  nome: string;
  descricao: string;
  preco: string;
  publicacao: string;
}

export default function ProdutoCadastro() {
  const history = useHistory();
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

  const initialValues = {
    nome: '',
    descricao: '',
    preco: '',
    publicacao: '',
  };
  
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    descricao: Yup.string().required('O campo descricao é obrigatorio'),
    preco: Yup.number().required('O campo preco é obrigatorio'),
    publicacao: Yup.date().required('O campo publicação é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    const data = new FormData();

    data.append('nome', values.nome);
    data.append('descricao', values.descricao);
    data.append('preco', values.preco);
    data.append('publicacao', values.publicacao);
    images.forEach(image => {
      data.append('images', image);
    });

    console.log(data.get('publicacao'));
    // console.log(data);
    // await api.post('produtos', data);

    alert('Cadastro realizado com sucesso!');
    history.push('/produtos');
  }

  return (
    <>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Cadastro de Produtos</h1>
        </Col>
      </Row>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmitForm(values)}
      >
        {({errors, touched}) => (
          <Form>
            <Campo
              htmlFor="nome"
              label="Nome"
              typeInput="text"
              nameInput="nome"
              idInput="nome"
              placeholderInput="Digite o nome do produto"
              erro={(errors.nome && touched.nome) ? (<Alert color="danger">{errors.nome}</Alert>) : null}
            />
            <Campo
              htmlFor="descricao"
              label="Descrição"
              typeInput="textarea"
              nameInput="descricao"
              idInput="descricao"
              placeholderInput="Digite a descricao do produto"
              erro={(errors.descricao && touched.descricao) ? (<Alert color="danger">{errors.descricao}</Alert>) : null}
            />
            <Campo
              htmlFor="preco"
              label="Preço"
              typeInput="number"
              nameInput="preco"
              idInput="preco"
              placeholderInput="Digite o preço do produto"
              erro={(errors.preco && touched.preco) ? (<Alert color="danger">{errors.preco}</Alert>) : null}
            />
            <Campo
              htmlFor="publicacao"
              label="Publicação"
              typeInput="date"
              nameInput="publicacao"
              idInput="publicacao"
              placeholderInput="Digite a data de publicacao do produto"
              erro={(errors.publicacao && touched.publicacao) ? (<Alert color="danger">{errors.publicacao}</Alert>) : null}
            />
            <Row className="mt-3">
              <Col>
                <div className="input-block">
                  <label htmlFor="images">Fotos</label>
                  <div className="images-container mt-2">
                    { previewImages.map(image => {
                      return (
                        <img
                          key={image}
                          src={image}
                          alt="imagem-produto"
                        />
                      );
                    }) }
                    <div className="btn-imagem-area">
                      <label
                        htmlFor="image[]"
                        className="new-image"
                      >
                        <FiPlus size={24} color="#15b6d6" />
                      </label>
                      <label className="new-image">
                        <FiDelete size={24} color="red" />
                      </label>
                      <label className="new-image" onClick={() => {
                        setImages([]);
                        setPreviewImages([]);
                      }}>
                        <FiTrash size={24} color="red" />
                      </label>
                    </div>
                  </div>
                  <input
                    multiple
                    onChange={handleSelectImages}
                    type="file"
                    id="image[]"
                  />
                </div>
              </Col>
            </Row>
            <div className="button-container">
              <ButtonGroup>
                <Button color="primary" type="submit">Salvar</Button>
                <Button color="danger" type="reset">Limpar</Button>
              </ButtonGroup>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}