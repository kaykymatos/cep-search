import { Component, OnInit, inject } from '@angular/core';
import { ViacepService } from '../../shared/services/viacep.service';
import { IViacepResponse } from '../../shared/interfaces/IViacepResponse';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


@Component({
  selector: 'app-cep-search',
  standalone: true,
  imports: [ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe],
  templateUrl: './cep-search.component.html',
  styleUrl: './cep-search.component.scss'
})
export class CepSearchComponent {

  public erro: string | null = null;
  #service = inject(ViacepService);
  public viacepResponse: IViacepResponse | null = null;
  public profileForm = new FormGroup({
    cep: new FormControl('')
  })
  public getCep(cep: string) {
    console.log(cep)
    if (cep === null || cep === undefined || cep == '') {
      this.erro = "Cep não informado!";
    } else {
      this.#service.getCep(cep).subscribe((response: IViacepResponse) => {
       console.log(response.erro)
        if (!response.erro) {
          this.erro = null;
          this.viacepResponse = response;
        }
        else {
          this.erro = 'Cep não encontrado';
        }
      })
    }


  }
}
