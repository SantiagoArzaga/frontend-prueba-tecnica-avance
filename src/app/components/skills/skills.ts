import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'CSS / SCSS', level: 90 },
    { name: 'JavaScript', level: 88 },
  ];

  cards = [
    {
      title: 'Frontend',
      description: 'Construcción de interfaces modernas y responsivas.',
      icon: '💻',
    },
    {
      title: 'Diseño UI/UX',
      description: 'Experiencia creando diseños centrados en el usuario.',
      icon: '🎨',
    },
    {
      title: 'Optimización',
      description: 'Buenas prácticas para rendimiento y accesibilidad.',
      icon: '⚡',
    },
  ];
}
