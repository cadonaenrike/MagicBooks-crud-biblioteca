import { useEffect, useState } from "react";
import BookType from "../types/BookType";
import TableBook from "../components/table/Table";
import uuid from "react-uuid";
import FloatButton from "../components/floatButton/FloatButton";
import {
  StyledButton,
  StyledForm,
  StyledH3,
  StyledInput,
  StyledLabel,
} from "../components/inputForm/inputFormStyleds";
import SearchInput from "../components/inputSearch/inputSearch";

function Home() {
  const currentYear = new Date().toISOString().split("T")[0];
  const [ArrayBooks, setArrayBooks] = useState<BookType[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [anoPubli, setAnoPubli] = useState<string>("");
  const [dataDeCadastro, setDataDeCadastro] = useState<string>(currentYear);
  const [genero, setGenero] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [editMode, setEditMode] = useState<string>("");
  const [showInputs, setShowInputs] = useState<boolean>(false);
  const [showInfos, setShowInfos] = useState<boolean>(false);
  const [disableInput, setDisableInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [disableButton, setDisableButton] = useState(true);
  const [disablePainel, setDisablePainel] = useState(true);

  useEffect(() => {
    if (
      titulo.length >= 3 &&
      autor.length >= 3 &&
      anoPubli.length >= 3 &&
      genero.length >= 3 &&
      descricao.length >= 3
    ) {
      setDisableButton(false);
    } else {
      console.log("nao digitou ");
      setDisableButton(true);
    }
  }, [titulo, autor, anoPubli, genero, descricao]);

  useEffect(() => {
    if (ArrayBooks.length > 0) {
      setDisablePainel(false);
    } else {
      setDisablePainel(true);
    }
  }, [ArrayBooks]);

  function clearStates() {
    setTitulo("");
    setAutor("");
    setAnoPubli("");
    setGenero("");
    setDescricao("");
    setShowInputs(false);
    setEditMode("");
    setShowInfos(false);
  }

  function setDate() {
    setDataDeCadastro(currentYear);
  }

  function filterBooksByTitle(books: BookType[]) {
    if (!searchValue) {
      return books;
    }
    const lowerSearchValue = searchValue.toLowerCase();
    return books.filter((book) =>
      book.titulo.toLowerCase().includes(lowerSearchValue)
    );
  }

  function addBook() {
    const newBook: BookType = {
      Id: uuid(),
      titulo,
      autor,
      anoPubli,
      dataDeCadastro,
      genero,
      descricao,
    };
    setArrayBooks([...ArrayBooks, newBook]);
    setDisablePainel(false);
    clearStates();
  }

  function excluir(id: string) {
    const deleteBook = ArrayBooks.filter((item) => item.Id !== id);
    const really = window.confirm("Você deseja excluir realmente?");

    if (really) {
      setArrayBooks(deleteBook);
      clearStates();
    }
  }

  function editar(id: string) {
    const editBook = ArrayBooks.find((item) => item.Id === id);
    setShowInputs(true);

    if (editBook) {
      setTitulo(editBook.titulo);
      setAutor(editBook.autor);
      setAnoPubli(editBook.anoPubli);
      setGenero(editBook.genero);
      setDisableInput(true);
      setDescricao(editBook.descricao);
      setEditMode(id);
    }
  }

  function handleClickButton() {
    if (!editMode) {
      setDate();
      addBook();
    } else {
      const newBookArray = [...ArrayBooks];

      const editBook = ArrayBooks.find((item) => item.Id === editMode);

      if (editBook) {
        editBook.titulo = titulo;
        editBook.autor = autor;
        editBook.anoPubli = anoPubli;
        editBook.genero = genero;
        editBook.descricao = descricao;
      }

      setArrayBooks(newBookArray);
      setDisableInput(false);

      clearStates();
    }
  }

  function changeShowInputs() {
    setShowInputs(!showInputs);
  }

  function toggleInfos() {
    setShowInfos(!showInfos);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "0%",
          top: "0%",
          display: "flex",
        }}
      >
        <h1>MagicBooks</h1>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div
        style={{
          backgroundImage: "url(./src/assets/fundo-livro.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "20rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10rem",
        }}
      >
        {showInputs && (
          <StyledForm>
            <StyledH3>Adicione as informações do livro</StyledH3>
            <StyledLabel htmlFor="titulo">Título:</StyledLabel>
            <StyledInput
              name="titulo"
              placeholder="Título"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <StyledLabel htmlFor="autor">Autor:</StyledLabel>
            <StyledInput
              name="autor"
              type="text"
              placeholder="Autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />

            <StyledLabel htmlFor="anoPubli">Ano de Publicação:</StyledLabel>
            <StyledInput
              name="anoPubli"
              type="date"
              max={new Date().toISOString().split("T")[0]}
              placeholder="Ano de Publicação"
              value={anoPubli}
              onChange={(e) => setAnoPubli(e.target.value)}
            />

            <StyledLabel htmlFor="dataCadastro">Data de Cadastro:</StyledLabel>
            <StyledInput
              disabled={disableInput === true}
              name="dataCadastro"
              type="date"
              placeholder="Data de Cadastro"
              value={dataDeCadastro}
            />

            <StyledLabel htmlFor="genero">Gênero:</StyledLabel>
            <StyledInput
              name="genero"
              type="text"
              placeholder="Gênero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />

            <StyledLabel htmlFor="descricao">Descrição:</StyledLabel>
            <StyledInput
              name="descricao"
              type="text"
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <StyledButton
              onClick={handleClickButton}
              disabled={disableButton}
              style={
                disableButton
                  ? {
                      backgroundColor: "gray",
                      cursor: "not-allowed",
                      pointerEvents: "none",
                    }
                  : {}
              }
            >
              {editMode ? "Salvar" : "Cadastrar"}
            </StyledButton>
          </StyledForm>
        )}
        {!showInputs && (
          <TableBook
            arrayBooks={filterBooksByTitle(ArrayBooks)}
            action={toggleInfos}
            editar={editar}
            excluir={excluir}
            showInfos={showInfos}
            editMode={!!editMode}
            disablePainelValue={disablePainel}
          />
        )}
        <FloatButton action={changeShowInputs} />
      </div>
    </div>
  );
}

export default Home;
