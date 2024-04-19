/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from 'src/entity/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    console.log('Seeder is running...');
    const repository = dataSource.getRepository(User);
    await repository.insert([
      {
        username: 'fastcampus',
        name: 'junu',
        password: '150321',
      },
    ]);
    console.log('Seeder completed.');
  }
}
