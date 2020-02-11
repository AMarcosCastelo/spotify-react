/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ActionUpdate from '../../actions';
import api from '../../services/api';
import { AuthContext } from '../../store/auth';

const Search = ({ data, handleData }) => {
  const [value, setValue] = useState('');
  const [payload, setPayload] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    handleData(payload);
  }, [payload]);

  async function getData () {
    const response = await api.get('/search', {
      headers: {
        Authorization: `Bearer ${userInfo.user.access_token}`
      },
      params: {
        q: value,
        type: 'album'
      }
    });

    setPayload(response.data.albums.items);
  };

  function handleSearch (event) {
    if (event.key === 'Enter') {
      getData();
    };
  }

  return (
    <Container>
      <label>Procure por artistas, álbuns e músicas</label>
      <Input
        type="text"
        onKeyDown={handleSearch}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder="Comece a escrever..."
      />
    </Container>
  )
};

const mapStateToProps = state => ({
  data: state.searchReducer
});

const mapDispatchToProps = (dispatch) => ({
  handleData: (payload) => {
    dispatch(ActionUpdate(payload));
  }
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  & label {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const Input = styled.input`
  height: 50px;
  position: relative;
  background: transparent;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  width: 90%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #fff;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
