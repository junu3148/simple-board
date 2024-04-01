import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      title: 'Board 1',
      contents: 'Board 1',
    },
    {
      id: 2,
      title: 'Board 2',
      contents: 'Board 2',
    },
    {
      id: 3,
      title: 'Board 3',
      contents: 'Board 3',
    },
    {
      id: 4,
      title: 'Board 4',
      contents: 'Board 4',
    },
    {
      id: 5,
      title: 'Board 5',
      contents: 'Board 5',
    },
    {
      id: 6,
      title: 'Board 6',
      contents: 'Board 6',
    },
  ];

  findAll() {
    return this.boards;
  }

  find(id: number) {
    const index = this.boards.findIndex((board) => board.id === id);
    return this.boards[index];
  }

  create(data: CreateBoardDto) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);
    return newBoard;
  }

  // 마지막 입력된 게시글의 id + 1 가져오기
  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }

  update(id: number, data) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return this.boards[index];
    }
    return null;
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }

  delete(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deleteBoard = this.boards[index];
      this.boards.splice(index, 1);
      return deleteBoard;
    }
    return null;
  }
}
