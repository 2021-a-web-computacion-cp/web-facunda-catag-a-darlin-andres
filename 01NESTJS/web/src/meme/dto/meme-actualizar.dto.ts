import { IsEmpty, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength,IsNumber,IsDate,IsBoolean,IsPositive } from "class-validator";

export class  MemeActualizarDto {
        @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    titulo: string;
    
    @IsOptional()
    @IsString()
    autor: string;
    
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    porcentajeReplica: number;

    @IsEmpty()
    fechaCreacion: string;

    @IsBoolean()
    @IsOptional()
    longevidad:         boolean;
}