import { Injectable } from '@angular/core';
import {Product} from './product'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getProducts(): Product[]{
    return [new Product(556,250,"Memory: 8GB SO-DIMM DDR4 3200MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 1x M.2 Slot for SSD Storage expansion","ASUS TUF Gaming","./assets/images/download.png"),
    new Product(662,450,"This smartwatch consists of 60 sports mode to track. Keep a track of all your activities and compare history to analyze your performance. Count steps, distance, and calories burned. 【IP68 Water Resistant】- This smartwatch can withstand dust, spills, raindrops and is sweatproof too","Fire-Boltt Rage Full Touch 1.28","./assets/images/smartwatch.jpg"),
    new Product(650,550,"PTron bullet pro is a 36w charging power car charger passed the rigorous test by USB compliance standard and it's fast and safe to provides you the best possible quick charging performance","pTron Bullet Pro","./assets/images/charger.jpg")
    ]
  }
}
