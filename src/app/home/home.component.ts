import { Component, OnInit } from '@angular/core';
import { MetaServiceService } from '../services/meta-service.service';
import { Meta } from '../models/meta.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  metas: Meta[] = [];
  nuevaMetaText: string = '';

  constructor(public metaService: MetaServiceService) {}

  ngOnInit(): void {
    // Read
    this.metaService.getMetas().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() as Meta })
        )
      )
    ).subscribe(data => {
      this.metas = data;
    });
  }

  // Add
  agregarMeta(): void {
    if (this.nuevaMetaText.trim() !== '') {
      const nuevaMeta: Meta = { meta: this.nuevaMetaText };
      this.metaService.addMeta(nuevaMeta);
      this.nuevaMetaText = '';
    }
  }

  // Delete
  eliminarMeta(id: string | undefined): void {
    if (id) {
      this.metaService.deleteMeta(id);
    }
  }
}