// client/src/api.js
import axios from 'axios';

const API_BASE_URL = '/api'; 
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define functions for CRUD operations

export const createIssue = async (issueData) => {
  try {
    const response = await api.post('/issues', issueData);
    return response.data;
  } catch (error) {
    console.error('Error creating issue:', error);
    throw error;
  }
};

export const readIssue = async (issueId) => {
  try {
    const response = await api.get(`/issues/${issueId}`);
    return response.data;
  } catch (error) {
    console.error('Error reading issue:', error);
    throw error;
  }
};
export const readIssueAll = async (issueId) => {
  try {
    const response = await api.get(`/issues`);
    return response.data;
  } catch (error) {
    console.error('Error reading issue:', error);
    throw error;
  }
};

export const updateIssue = async (issueId, updatedData) => {
  try {
    const response = await api.put(`/issues/${issueId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating issue:', error);
    throw error;
  }
};

export const deleteIssue = async (issueId) => {
  try {
    const response = await api.delete(`/issues/${issueId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting issue:', error);
    throw error;
  }
};
