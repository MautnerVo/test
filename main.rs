fn main() {
    let hello = "Hello World";

    let mut seznam: Vec<char> = Vec::new();
    let cisla = vec![0, 2, 32, 2, 3, 1, 31, 5];
    
    for i in hello.chars() {
        seznam.push(i);
    }

    let cisla_sum: f64 = cisla.iter().sum::<i32>() as f64 / cisla.len() as f64;
    println!("{}", cisla_sum);
    println!("{:?}", seznam);

    let helloworld: Vec<&str> = hello.split(' ').collect();
    let (hello, world) = (helloworld[0], helloworld[1]);
    println!("{} {}", hello, world);

    if hello.len() < 10 {
        println!("True");
    } else {
        println!("False");
    }
}
