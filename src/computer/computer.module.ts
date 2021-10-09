import { ComputerController } from './computer.controller'
import { Module } from '@nestjs/common'
import { CpuModule } from "../cpu/cpu.module"
import { DiskModule } from "../disk/disk.module"

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController]
})

export class ComputerModule {}
