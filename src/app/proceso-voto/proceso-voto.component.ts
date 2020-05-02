import { Component, OnInit } from '@angular/core';

import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';

import sampleConfig from '../app.config';

interface Message {
  institucion: String;
  status: boolean;
}


@Component({
  selector: 'app-proceso-voto',
  templateUrl: './proceso-voto.component.html',
  styleUrls: ['./proceso-voto.component.css']
})
export class ProcesoVotoComponent implements OnInit {
  failed: Boolean;
  messages1: Array<Message> [];
  messages2: Array<Message> [];

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {
    this.messages1 = [];
    this.messages2 = [];
  }

  async ngOnInit() {

    const accessToken = await this.oktaAuth.getAccessToken();

    this.http.get(sampleConfig.resourceServer.aperturaUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      }
    }).subscribe((data: any) => {
      let index = 1;
      const messages1 = data.apertura.map((apertura) => {
        return {
          institucion: apertura.institucion,
          status: apertura.status,
          index: index++
        };
      });
      [].push.apply(this.messages1, messages1);
    }, (err) => {
      console.error(err);
      this.failed = true;
    });

    this.http.get(sampleConfig.resourceServer.cierreUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      }
    }).subscribe((data: any) => {
      let index = 1;
      const messages2 = data.cierre.map((cierre) => {
        return {
          institucion: cierre.institucion,
          status: cierre.status,
          index: index++
        };
      });
      [].push.apply(this.messages2, messages2);
    }, (err) => {
      console.error(err);
      this.failed = true;
    });

  }

}
