/* eslint-disable react/no-unescaped-entities */
import { Grid, CardContent, Typography } from "@mui/material";

export const MisVisVal = () => {
  return (
    <>
      <Grid paddingY={5} paddingX={2} container marginY={10}>
        <Grid paddingBottom={2} marginBottom={3} width="100vw">
          <Typography variant="h2" color="initial" textAlign="center">
            Misión, Visión y Valores
          </Typography>
        </Grid>
        <Grid
          container
          width={"100%"}
          direction="row"
          justifyContent="space-evenly"
          wrap="wrap"
        >
          <CardContent sx={"background:#2d2d2d; margin:25px;"}>
            <Typography
              paddingY={2}
              align="center"
              variant="h4"
              color="#e1e1e1"
            >
              Misión
            </Typography>
            <Typography
              width={"350px"}
              variant="body1"
              color="#c3c3c3"
              align="center"
            >
              La Unidad Educativa "RAFAEL URDANETA" se compromete a crear un
              nuevo ciudadano con valores de paz, solidaridad, integridad e
              identidad nacional. Este ciudadano valorará sus deberes, derechos
              y el lenguaje como herramienta de comunicación y convivencia.
              Participará en espacios que potencien su desarrollo y
              transformación, centrada en el ser social y la participación
              protagónica. La nueva escuela, como centro comunitario, optimizará
              espacios de acción y brindará integración
              escuela-familia-comunidad. Se busca mejorar la capacidad para la
              transformación de hábitos de salud, prevención de enfermedades y
              normas de convivencia que fortalezcan la formación integral del
              personal escolar.
            </Typography>
          </CardContent>
          <CardContent sx={"background:#2d2d2d; margin:25px;"}>
            <Typography
              paddingY={2}
              align="center"
              variant="h4"
              color="#e1e1e1"
            >
              Visión
            </Typography>
            <Typography
              width={"350px"}
              variant="body1"
              color="#c3c3c3"
              align="center"
            >
              La Unidad Educativa "RAFAEL URDANETA" busca una formación integral
              y continua del ciudadano. Se enfoca en la triada social:
              individuo, familia y sociedad. Su objetivo es la transformación
              social, fomentando valores como la igualdad, solidaridad,
              libertad, participación y democracia. La escuela busca insertarse
              en el contexto socio-económico y cultural, modelando un ciudadano
              capaz de transformar su entorno social a través de la
              participación, creación e innovación, incluyendo a todos los niños
              y niñas sin escolaridad.
            </Typography>
          </CardContent>
          <CardContent sx={"background:#2d2d2d; margin:25px;"}>
            <Typography
              paddingY={2}
              align="center"
              variant="h4"
              color="#e1e1e1"
            >
              Valores
            </Typography>
            <Typography
              width={"350px"}
              variant="body1"
              color="#c3c3c3"
              align="center"
            >
              La Unidad Educativa "RAFAEL URDANETA" busca una educación integral
              de calidad que forme a ciudadanos responsables, cumplidos con sus
              deberes y derechos, y conscientes de su salud integral. La
              educación se basa en la ética, la moral y valores sólidos que
              modelen a los estudiantes como futuros líderes de una patria
              soberana y socialista, con equidad e igualdad para todos, sin
              discriminación.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};
