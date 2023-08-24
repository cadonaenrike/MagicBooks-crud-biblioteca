import React from "react";
import BookType from "../../types/BookType";
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
  EditButton,
  DeleteButton,
  InfoButton,
} from "./TableBookStyles";

interface TableProps {
  arrayBooks: BookType[];
  editar: (id: string) => void;
  excluir: (id: string) => void;
  action: () => void;
  showInfos?: boolean;
  editMode?: boolean;
  searchValue?: string;
  disablePainelValue: boolean;
}

const TableBook: React.FC<TableProps> = ({
  arrayBooks,
  editar,
  excluir,
  editMode,
  action,
  showInfos,
  searchValue = "",
  disablePainelValue,
}) => {
  function filterBooksByTitle(books: BookType[], search: string) {
    if (!search) {
      return books;
    }
    const lowerSearchValue = search.toLowerCase();
    return books.filter((book) =>
      book.titulo.toLowerCase().includes(lowerSearchValue)
    );
  }

  const filteredBooks = filterBooksByTitle(arrayBooks, searchValue);

  return (
    <StyledTable>
      {showInfos === true && disablePainelValue === false && (
        <>
          <thead>
            <StyledTr>
              <StyledTh>Título</StyledTh>
              <StyledTh>Autor</StyledTh>
              <StyledTh>Ano de Publicação</StyledTh>
              <StyledTh>Data de cadastro</StyledTh>
              <StyledTh>Gênero</StyledTh>
              <StyledTh>Descrição</StyledTh>
              <StyledTh>Ações</StyledTh>
            </StyledTr>
          </thead>
          <tbody>
            {filteredBooks.map((book, id) => (
              <StyledTr key={id}>
                <StyledTd>{book.titulo}</StyledTd>
                <StyledTd>{book.autor}</StyledTd>
                <StyledTd>{book.anoPubli}</StyledTd>
                <StyledTd>{book.dataDeCadastro}</StyledTd>
                <StyledTd>{book.genero}</StyledTd>
                <StyledTd>{book.descricao}</StyledTd>
                <StyledTd style={{ display: "flex" }}>
                  <InfoButton onClick={action}> Menos </InfoButton>
                  <EditButton onClick={() => editar(book.Id)}>
                    Editar
                  </EditButton>
                  <DeleteButton
                    onClick={() => excluir(book.Id)}
                    disabled={editMode}
                  >
                    Excluir
                  </DeleteButton>
                </StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </>
      )}
      {showInfos === false && disablePainelValue === false && (
        <>
          <thead>
            <StyledTr>
              <StyledTh>Título</StyledTh>
              <StyledTh>Autor</StyledTh>
              <StyledTh>Ano de Publicação</StyledTh>
              <StyledTh>Ações</StyledTh>
            </StyledTr>
          </thead>
          <tbody>
            {arrayBooks.map((book, id) => (
              <StyledTr key={id}>
                <StyledTd>{book.titulo}</StyledTd>
                <StyledTd>{book.autor}</StyledTd>
                <StyledTd>{book.anoPubli}</StyledTd>
                <StyledTd style={{ display: "flex" }}>
                  <InfoButton onClick={action}>Mais</InfoButton>
                </StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </>
      )}
    </StyledTable>
  );
};

export default TableBook;
