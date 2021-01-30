import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 4rem;
  @media (min-width: 992px) {
    margin: 10rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    margin-top: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    color: #666;
    margin-top: 1rem;
    font-weight: bold;
  }
`;

const Frase = ({ frase }) => {
  if (Object.keys(frase).length === 0) return null;

  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </ContenedorFrase>
  );
};

Frase.propTypes = {
  frase: PropTypes.object.isRequired,
};

export default Frase;
