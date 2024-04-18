import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllData } from '../../api/mockapi/camperAPI';

export const getCatalogThunk = createAsyncThunk('getAllContacts', () => {
  try {
    const resp = fetchAllData();
    return resp;
  } catch (e) {
    throw e;
  }
});
