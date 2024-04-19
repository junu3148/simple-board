//import { OmitType, PartialType, PickType } from '@nestjs/swagger';
//import { CreateBoardDto } from './create-board.dto';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  title?: string;

  @IsOptional()
  contents?: string;
}

//export class UpdateBoardDto extends PartialType(CreateBoardDto) {}
//export class UpdateBoardDto extends PickType(CreateBoardDto, ['title']) {}
//export class UpdateBoardDto extends OmitType(CreateBoardDto, ['title']) {}
