import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteOutput: EventEmitter<string> = new EventEmitter<string>();

  @Input()
   public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDeleteCharacter(index: number): void {
  //   // TODO: Emitir el ID del personaje
  //   // console.log({index})
  //   this.onDeleteOutput.emit(index);
  // }

  onDeleteCharacterById(id?: string): void {
    if(!id) {
      return;
    }
    this.onDeleteOutput.emit(id);
  }
}
