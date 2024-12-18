import { Component, ViewContainerRef, Input, OnInit, AfterViewInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
    selector: 'app-droplist',
    standalone: true,
    imports: [
      KeyValuePipe
    ],
    templateUrl: './droplist.component.html',
    styleUrl: './droplist.component.css'
  })

  export class Droplist implements OnInit {
    element_visibility: string = 'element_invisible';
    selection: string = 'Снять выделение'

    dataSubList = ['Неразобранное', 'Переговоры', 'Принимают решение', 'Успешно'];

    dataList = [
        {
            id: 0,
            nameElement: 'Продажи',
            isOpen: false,
            isSelect: false,
            subSelect: [0, 0, 0, 0],
        },
        {
            id: 1,
            nameElement: 'Сотрудники',
            isOpen: false,
            isSelect: false,
            subSelect: [0, 0, 0, 0],
        },
        {
            id: 2,
            nameElement: 'Партнеры',
            isOpen: false,
            isSelect: false,
            subSelect: [0, 0, 0, 0],
        },
        {
            id: 3,
            nameElement: 'Ивент',
            isOpen: false,
            isSelect: false,
            subSelect: [0, 0, 0, 0],
        },
        {
            id: 4,
            nameElement: 'Входящие обращения',
            isOpen: false,
            isSelect: false,
            subSelect: [0, 0, 0, 0],
        },
    ]

    showSubList(id: any) : void {
        let changeElement = this.dataList[id];
        changeElement.isOpen = changeElement.isOpen ? false : true;
        this.dataList[id] = changeElement;
    }

    saveChanges(idList: any, idSubList: number = -1) : void {
        let changeElement = this.dataList[idList];
        if (idSubList == -1) {
            changeElement.isSelect = changeElement.isSelect ? false : true;
        } else {
            changeElement.subSelect[idSubList] = (changeElement.subSelect[idSubList] + 1) % 2 as 0 | 1;
        }
        this.dataList[idList] = changeElement;
    }

    ngOnInit() : void {
    }
  }