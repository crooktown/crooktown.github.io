import { CharacterStateBase } from './_stateLibrary';
import { ICharacterState } from '../../interfaces/ICharacterState';
import { Character } from '../Character';
export declare class ShotgunShoot extends CharacterStateBase implements ICharacterState {
    fireDelay: number;
    fireElapsedTime: number;
    hasShot: boolean;
    constructor(character: Character);
    update(timeStep: number): void;
    onInputChange(): void;
}
