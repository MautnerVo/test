use ndarray::Array1;
use plotters::prelude::*;

fn main() {
    // Vytvoření a tisk pole čtverců
    let squares: Vec<i32> = (-20..20).map(|x| x * x).collect();
    println!("{:?}", squares);

    // Vytvoření pole záporných čtverců
    let neg_squares: Vec<i32> = (-20..20).map(|x| -(x * x)).collect();

    // Nastavení výstupního formátu grafu
    let root = BitMapBackend::new("plot.png", (800, 600))
        .into_drawing_area();
    root.fill(&WHITE).unwrap();

    // Vytvoření grafu
    let mut chart = ChartBuilder::on(&root)
        .caption("Plot of x^2 and -x^2", ("sans-serif", 50))
        .margin(10)
        .x_label_area_size(30)
        .y_label_area_size(30)
        .build_cartesian_2d(-20..20, -400..400)
        .unwrap();

    chart.configure_mesh().draw().unwrap();

    // Přidání prvního grafu
    chart
        .draw_series(LineSeries::new(
            (-20..20).zip(squares.iter().cloned()),
            &RED,
        ))
        .unwrap()
        .label("x^2")
        .legend(|(x, y)| PathElement::new([(x, y), (x + 10, y)], &RED));

    // Přidání druhého grafu
    chart
        .draw_series(LineSeries::new(
            (-20..20).zip(neg_squares.iter().cloned()),
            &BLUE,
        ))
        .unwrap()
        .label("-x^2")
        .legend(|(x, y)| PathElement::new([(x, y), (x + 10, y)], &BLUE));

    // Nastavení legendy
    chart.configure_series_labels().background_style(&WHITE).draw().unwrap();

    // Uložení grafu do souboru
    root.present().unwrap();
}
