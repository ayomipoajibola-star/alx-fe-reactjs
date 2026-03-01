import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

// Test 1: Initial Render
test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
  expect(screen.getByText('Build Projects')).toBeInTheDocument();
});

// Test 2: Adding a Todo
test('adds a new todo when form is submitted', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Todo Item' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo Item')).toBeInTheDocument();
});

// Test 3: Toggling a Todo
test('toggles a todo between completed and not completed', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');

  // Initially not completed
  expect(todo).toHaveStyle('text-decoration: none');

  // Click to toggle
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');

  // Click again to toggle back
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: none');
});

// Test 4: Deleting a Todo
test('deletes a todo when delete button is clicked', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();

  const deleteButton = screen.getByTestId('delete-1');
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});